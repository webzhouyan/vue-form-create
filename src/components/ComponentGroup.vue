<template>
  <div class="widget-cate">{{ title }} <span class="subtitle">拖拽下列控件到右侧</span></div>
  <Draggable
    tag="ul"
    item-key="type"
    ghostClass="ghost"
    :group="{ name: 'people', pull: 'clone', put: false }"
    :sort="false"
    :list="list"
  >
    <template #item="{ element }">
      <li
        v-if="fields.includes(element.type)"
        class="form-edit-widget-label"
        :class="{ 'no-put': element.tpye === 'divider' }"
      >
        <a>
          <SvgIcon :iconClass="element.type" />
          <span>{{ element.label }}</span>
        </a>
      </li>
    </template>
  </Draggable>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Draggable from 'vuedraggable'
import SvgIcon from './SvgIcon.vue'

export default defineComponent({
  name: 'ComponentGroup',
  components: {
    Draggable,
    SvgIcon
  },
  props: {
    title: {
      type: String,
      required: true
    },
    fields: {
      type: Array as PropType<Array<string>>,
      required: true
    },
    list: {
      required: true
    }
  }
})
</script>
