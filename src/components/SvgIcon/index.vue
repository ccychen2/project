<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  color: { type: String, default: 'red' },
  width: { type: String, default: '16px' },
  height: { type: String, default: '16px' },
})
</script>

<template>
  <div>
    <svg :style = "{width,height}">
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
</style>