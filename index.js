new Vue({
  el: "#vue-app",
  data: {
    books: [],
    cover: [],
    search: ""
  },
  methods: {
    getData() {
      fetch("https://api.myjson.com/bins/zyv02", {
        method: "GET"
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(response.statusText);
        })
        .then(json => {
          this.books = json.books;
          //console.log(this.books);
        })
        .catch(error => {
          console.log("Request failed: " + error.message);
        });
    }
  },
  computed: {
    filteredBooks: function() {
      return this.books.filter(book => {
        return (
          book.title.includes(this.search) ||
          book.description.includes(this.search)
        );
      });
    }
  },
  created() {
    this.getData();
  }
});
