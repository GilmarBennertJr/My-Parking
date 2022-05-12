<template>
    <div class="container box">
        <div class="lg-box p-2" style="align-items: center">
            <div class="row">
                <div class="col 12">
                    <label for="">
                        E-mail
                    </label>
                </div>
            </div>
        </div>
	</div>
</template>
<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>
<style>    
    html, body {
        height: 100% !important;
    }

    #app {
        height: 90%;
    }

    .box {
        height: 90%;
        display: flex;
        align-items: center;
        justify-content: center;    
    }

    .box .lg-box {
        width: 30%;
        height: 100px;
        border: 1px solid black;
    }
</style>