<template>
  <div>cudo</div>
</template>
<script>
export default {
  methods: {},
  mounted() {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "cb45912854d113c3f8b565118ae4d123",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  },
  data: function () {},
};
</script>