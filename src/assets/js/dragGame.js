import { ref, computed } from 'vue'
import img2eur from '@/assets/image/2-eur.svg'
import img1eur from '@/assets/image/1-eur.svg'
import img50ec from '@/assets/image/50-ec.svg'

export function useDragGame() {
  const items = ref([
    { id: 1, value: 2, src: img2eur },
    { id: 2, value: 1, src: img1eur },
    { id: 3, value: 0.5, src: img50ec }
  ])

  const droppedItems = ref([])
  const isShaking = ref(false)
  const draggedItem = ref(null)
  const touchedItem = ref(null)

  const sum = computed(() => {
    return droppedItems.value.reduce((acc, item) => acc + item.value, 0)
  })

  const isCorrect = computed(() => Math.abs(sum.value - 7) < 0.0001)

  function handleDragStart(item, event) {
    if (event.dataTransfer) {
      event.dataTransfer.setData('text/plain', item.id.toString())
      draggedItem.value = item
    }
  }

  function handleDrop(event) {
    event.preventDefault()
    if (!draggedItem.value) return

    const newSum = sum.value + draggedItem.value.value
    if (newSum > 7) {
      shake()
      return
    }

    droppedItems.value.push({ ...draggedItem.value })
    draggedItem.value = null
  }

  function handleTouchStart(item, event) {
    touchedItem.value = item
    const touch = event.touches[0]
    const element = event.target
    const rect = element.getBoundingClientRect()
    element.style.position = 'fixed'
    element.style.left = touch.clientX - rect.width / 2 + 'px'
    element.style.top = touch.clientY - rect.height / 2 + 'px'
  }

  function handleTouchMove(event) {
    if (touchedItem.value) {
      const element = event.target
      const touch = event.touches[0]
      element.style.left = touch.clientX - element.offsetWidth / 2 + 'px'
      element.style.top = touch.clientY - element.offsetHeight / 2 + 'px'
    }
  }

  function handleTouchEnd(event) {
    if (!touchedItem.value) return

    const dropZone = document.querySelector('.drop-zone')
    if (!dropZone) return

    const touch = event.changedTouches[0]
    const dropZoneRect = dropZone.getBoundingClientRect()

    if (
      touch.clientX >= dropZoneRect.left &&
      touch.clientX <= dropZoneRect.right &&
      touch.clientY >= dropZoneRect.top &&
      touch.clientY <= dropZoneRect.bottom
    ) {
      const newSum = sum.value + touchedItem.value.value
      if (newSum > 7) {
        shake()
      } else {
        droppedItems.value.push({ ...touchedItem.value })
      }
    }

    const element = event.target
    element.style.position = ''
    element.style.left = ''
    element.style.top = ''
    touchedItem.value = null
  }

  function handleDragOver(event) {
    event.preventDefault()
  }

  function shake() {
    isShaking.value = true
    setTimeout(() => {
      isShaking.value = false
      resetGame()
    }, 820)
  }

  function resetGame() {
    droppedItems.value = []
  }

  return {
    items,
    droppedItems,
    isShaking,
    isCorrect,
    sum,
    handleDragStart,
    handleDrop,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleDragOver
  }
}
