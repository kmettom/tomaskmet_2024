<template>
    <button :class="['btn', additionalClass]">
        <span class="heading-5">Download CV</span>
        <IconsDownload />
    </button>
</template>

<script>
export default {
    props: {
        additionalClass: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/style";

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    color: var(--dark-color);
    background-color: var(--light-color);
    padding: 30px 40px;
    border: none;

    &:hover {
        outline: 3px solid black;
        cursor: pointer;
    }

    @include respond-width($w-m-s) {
        padding: 22px 40px;
    }
}
</style>