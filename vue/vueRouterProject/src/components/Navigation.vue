<template>
    <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/profile">Profile</RouterLink>
    <RouterLink to="/products">Products</RouterLink>
    </nav>
</template>



<style scoped>
    nav {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center
    }
</style>
