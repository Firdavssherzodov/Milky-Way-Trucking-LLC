<template>
  <div class="div">
    <div
      class="box w-4/5 m-auto flex flex-col justify-center items-center"
      style="height: 70vh !important"
    >
      <div class="card">
        <Carousel
          :value="products"
          :numVisible="4"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          circular
          :autoplayInterval="10000"
        >
          <template #item="slotProps">
            <div class="text-center">
              <div class="mb-3">
                <img
                  :src="slotProps.data.image"
                  :alt="slotProps.data.name"
                  class="w-8 foto img"
                />
              </div>
              <div></div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
//
import Carousel from "primevue/carousel";

const products = ref([
  {
    id: 1,
    name: "FMCG",
    image:
      "https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/home_furniture_96x96.svg?h=240&la=en&w=240&hash=BE80449F6E61744320FE10226597244D",
  },
  {
    id: 1,
    name: "Retail",
    image:
      "https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/home-decor_96x96.svg?h=240&la=en&w=240&hash=704F74D1A01606F9C6D74DD324E25C87",
  },
  {
    id: 1,
    name: "Fashion & Lifestyle",
    image:
      "https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/weekly-merchandise-products_96x96.svg?h=240&la=en&w=240&hash=47B85E39A19096B6C05E0DCED8A166C1",
  },
  {
    id: 1,
    name: "Chemicals",
    image:
      "https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/centre-store_96x96.svg?h=240&la=en&w=240&hash=60DEC8C86B4B66EC0EAA12DA922FF62B",
  },
  {
    id: 1,
    name: "Refrigerated goods",
    image:
      "https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/frozen-products_96x96_v2.svg?h=240&la=en&w=240&hash=7E9788C09E9B63EE43A01BAA528E1BF5",
  },
  {
    id: 1,
    name: "Automotive",
    image:
      "https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/automotive_96x96_v1.svg?h=240&la=en&w=240&hash=05E6F73A2A47ABAEE1234042784BAEDA",
  },
  {
    id: 1,
    name: "Pharma & Healthcare",
    image:
      "https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/pharma_and_healthcare_96x96_v1.svg?h=240&la=en&w=240&hash=FE3919BC208E093C47B6D110FCD5613A",
  },
  {
    id: 1,
    name: "Technology",
    image:
      "https://www.maersk.com/~/media_sc9/maersk/solutions/retail/icon-illustrations/home_appliances_96x96.svg?h=240&la=en&w=240&hash=48E43F733590C42337F0E61A9FAB8956",
  },
]);
const responsiveOptions = ref([
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: "991px",
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
]);

const getSeverity = (status) => {
  switch (status) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warning";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return null;
  }
};
</script>

<style scoped>
.foto {
  display: block;
  margin-left: 3.5rem;
  width: 70% !important ;
}
.div {
  position: relative;
  width: 100%;
  height: 45rem;
  margin-top: 245vh;
  border: 1px solid blue;
}
.text-center {
  width: 20rem;
  height: 15rem;
}
.img {
  width: 20rem;
  height: 25rem;
}
</style>
