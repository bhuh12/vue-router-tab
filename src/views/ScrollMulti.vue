<script>
import ScrollPosition from './ScrollPosition.vue'

export default {
  name: 'ScrollMulti',

  extends: ScrollPosition,

  pageScroller: ['.custom-scroller', '.custom-scroller-1'],

  data() {
    return {
      multi: true
    }
  }
}
</script>
