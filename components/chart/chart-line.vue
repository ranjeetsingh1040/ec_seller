<template>
  <div class="card">
    <div class="card-body">
       <p class="text-base font-semibold  my-2">Line</p>

      <div class="btn-group btn-group-toggle">
        <label
          v-for="(item, index) in btn"
          :key="index"
          :class="{ active: item.value == radio }"
          class="btn btn-success accent-red-500"
        >
          <input
            v-model="radio"
            :name="dataLabel"
            :value="item.value"
            type="radio" />
          {{ item.label }}
        </label>
      </div>
    </div>

    <div class="card-img-bottom">
      <chartjs-line
        :backgroundcolor="bgColor"
        :beginzero="beginZero"
        :bind="true"
        :bordercolor="borderColor"
        :data="data[radio]"
        :datalabel="dataLabel"
        :labels="labels[radio]"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgColor: "#f02640",
      beginZero: true,
      borderColor: "#f02640",
      backgroundcolor: "#f02640",
      btn: [
        { label: "Today", value: "day" },
        { label: "This Week", value: "week" }
      ],
      data: {
        day: [1, 3, 5, 3, 1],
        week: [12, 14, 16, 18, 11, 13, 15]
      },
      dataLabel: "Foo",
      labels: {
        day: [8, 10, 12, 14, 16],
        week: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      },
      radio: "day"
    };
  }
};
</script>