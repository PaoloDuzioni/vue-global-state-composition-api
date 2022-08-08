<script setup>
import state from '../global/state';
</script>

<template>
    <h2>Hi, Im am Child Component ONE</h2>

    {{ state.getCount }}

    <button @click="state.addCount">Add Count</button>
</template>
