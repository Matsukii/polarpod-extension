<template>
    
    <div
        class="checkbox"
        @click="$emit('click')"
        :style="stl"
        >

        <svg class="check-out" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31 28.612V31H29.6058M2.39416 31H1V28.619M1.00269 3.38799V1H2.39685M29.6058 1H31V3.38799" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-show="checked" class="checked" width="326" height="326" viewBox="0 0 326 326" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.75 12.75L34.1786 34.1786L77.0357 77.0357L119.893 119.893L130.607 130.607M312.75 12.75L291.321 34.1786L248.464 77.0357L205.607 119.893L194.893 130.607M312.75 312.75L291.321 291.321L248.464 248.464L205.607 205.607L194.893 194.893M12.75 312.75L34.1786 291.321L77.0357 248.464L119.893 205.607L130.607 194.893" stroke="white" stroke-width="25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
            
    </div>
    
</template>


<script>
    export default {
        name: "checkbox",
        props:{
            width:{
                name:String,
                default: '28'
            },
            checked:{
                name:Boolean,
                default: false
            }

        },
        computed: {

            // style
            stl(){

                return {
                    'width':  `${this.width}`,
                    'height': `${this.width}`
                }
            }
        },
    }
</script>


<style>

    .checkbox{
        position: relative;
        min-width: 8px;
        min-height: 8px;
        background: var(--checkbox-bg);
        cursor: pointer;
        transition: all 100ms ease-in-out;
    }
    .check-out{
        position: absolute;
        width: inherit;
        height: inherit;
    }
    .checked{
        position: absolute;
        width: 60%;
        height: auto;
        margin: 20%;
    }

</style>