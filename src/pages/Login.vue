<template>
  <testTsx title="login page" />
</template>

<script setup lang="tsx">
  const testTsx = (props: { title: any }) => {
    return (
      <>
        <div class="text-[24px]">{props.title}</div>
        <p class="text-[#666]">this comp is tsx</p>
      </>
    );
  };
</script>

<style lang="scss" scoped></style>
