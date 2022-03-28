<template>
    <div>
        <div class="num-3">3
            <p>В нашем роддоме ежедневно рождаются десятки милейших зверушек</p>

              {{ left_results}}
        </div>
        <div class="num-4">4
            <img 
          src="/images/left_widget_img.jpg"
          width="100%"
          alt="коровка"
        />
        </div>
    </div>

</template>

<script>
export default {
  name: "LeftBlockComponent",
};
</script>