<template>
  <div class="ui container">
    <div class="ui hidden divider"></div>
    <h1 class="ui center aligned icon header">
      <i class="users icon"></i>
      Contacts
    </h1>
    <div class="ui divider"></div>
  <div>
    <build-form />
    </div>
    <div class="ui hidden divider"></div>
    <div>
    <users-list />
    </div>
  </div>
</template>

<script>
import BuildForm from "./components/BuildForm.vue";
import UsersList from "./components/UsersList.vue";

export default {
  components: {
    BuildForm,
    UsersList,
  },
  created() {
    this.$store.dispatch("fetchDB");
  },
};
</script>
