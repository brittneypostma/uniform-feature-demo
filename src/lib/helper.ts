export const getCompositionData = (composition) => {
  const { slots } = composition
  slots.content.map(contentData => {
    contentData.slots.map(slotData => {
      slotData.pz.map(pzData => {
        return pzData.paramaters.title.value
      })
    })
  })
}