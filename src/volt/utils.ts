import { mergeProps } from 'vue';

const simpleMergeClass = (...values: any[]) =>
  values
    .flat()
    .filter(Boolean)
    .join(' ')
    .trim()

export const ptViewMerge = (globalPTProps = {} as any, selfPTProps = {} as any, datasets: any) => {
  const { class: globalClass, ...globalRest } = globalPTProps
  const { class: selfClass, ...selfRest } = selfPTProps

  return mergeProps({ class: simpleMergeClass(globalClass, selfClass) }, globalRest, selfRest, datasets)
}