<script setup>
import state from '../global/state';
</script>

<template>
    <h2>Hi, Im am Child Component TWO</h2>
    {{ state.getCount }}
    <button @click="state.subCount">Sub Count</button>
</template>
