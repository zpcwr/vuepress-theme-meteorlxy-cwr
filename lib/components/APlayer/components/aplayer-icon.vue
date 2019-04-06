<script>
  export default {

    functional: true,

    props: {
      type: {
        type: String,
        required: true,
      },
    },
    render (h, { props: { type } }) {
      return (
        <svg
          class="aplayer-icons"
        >
        <title>
          { type === 'prev' || type === 'next'? 'skip' : type }
        </title>

        <use xlinkHref={`#icon-aplayer-${ type === 'prev' || type === 'next'? 'skip' : type }`} />
      </svg>
    )
    },
  }
</script>
<style>
.aplayer-icons {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: #666;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
