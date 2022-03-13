<template>
  <testTsx title="login page" />
</template>

<script setup lang="tsx">
  const testTsx = (props: { title: any }) => {
    return (
      <>
        <div>{props.title}</div>
        <p>this comp is tsx</p>
      </>
    );
  };
</script>

<style lang="scss" scoped></style>
