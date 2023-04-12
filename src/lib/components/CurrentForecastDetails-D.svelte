<script>
    export let Title;
    export let iconSvg;
    export let text1;
    export let text2;
</script>

<main>
    <div class="card">
        <div class="icon">
            {@html iconSvg}
        </div>
        <p>{Title}</p>
        
        <div class="text">
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
    </div>

</main>

<style>
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        position: relative;
        align-items: flex-start;
        padding-left: 0.5rem;
    } 
    .icon {
        width: 100px;
        height: 100px;
        position: absolute;
        top: 0px;
        right: 0px;
    }




</style>