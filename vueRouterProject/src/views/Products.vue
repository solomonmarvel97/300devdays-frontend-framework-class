<template>
<div>
<h1 style="margin-top: 5em">Product Page</h1>

<div class="product">
    <RouterLink to="/product/afasfakfa-124jasfna-asfasfaf">
        <h2>Product 1</h2>
        <p>This is garri pack</p>
    </RouterLink>
    </div>
</div>

</template>

<style scoped>
.product {
    display: grid;
    place-items : center;
    gap: 20px
}

a {
    padding: 30px;
    background-color: yellow;
}
</style>
