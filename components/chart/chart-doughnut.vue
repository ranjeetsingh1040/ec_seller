<template>
  <div class="card">
    <div class="card-body">
    <p class="text-base font-semibold text-gray-900 my-2">Doughnut</p>
    
    </div>

    <div class="card-img-bottom">
      <chartjs-doughnut
        :bind="true"
        :datasets="datasets"
        :labels="labels"
        :option="option"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datasets: [
        {
          data: [10, 20, 40],
          backgroundColor: ["#f36e60", "#ffdb3b", "#185190"],
          hoverBackgroundColor: ["#f36e60", "#ffdb3b", "#185190"]
        }
      ],
      labels: ["Foo", "Bar", "Baz"],
      option: {}
    };
  }
};
</script>