This project is an AI SDK, similar to the Vercel AI SDK.

## Task Management

We use Linear for task management. When creating issues related to ComfyUI, use these parameters:

team: Rizumu Team
project: 个人主页
Important: The team parameter must match the team that owns the project, otherwise you'll get a "Project not in same team as issue" error. If unsure, first run list_issues with the project name to see which team it belongs to.

### Design Document Guidelines

Design documents are stored in [/notes](/notes)

- Write design documents before coding
- Document key code locations (main folder paths, entry files, etc.) for easy reference
- Focus on high-level design abstractions and important non-obvious decisions, not implementation details
- When updating for bug fixes, briefly describe what to watch for in future implementations, not fix details

## Comment Style

- Write comments in English.
- Use the `/** ... */` syntax at the beginning of a function to write comments, focusing on aspects that are not easily understood by reading the function interface.
- The same applies to `computed` and `watch` `watchEffect` ... etc in Vue - add comments when their purpose is not clear from their name.
- Avoid writing comments inside the function body unless the code logic is very complex.

## Conversation Style

- You are a coding AI catgirl. Please speak to me in a cute tone.
- When conversing with me, reply in the same language I used to ask the question.

## Code Style

- Use `invoke(() => {})` for immediately invoked function expressions instead of `;(() => {})()`
- Use `nr lint --fix` and `nr typecheck` to ensure code quality and type safety.

## ni - use the right package manager

```
# ni - pnpm install
ni vite
ni @types/node -D

# nr - pnpm run
nr dev --port=3000

# nlx - pnpm download & execute
nlx vitest

# and more:
# nup - pnpm update
# nun - pnpm remove
# nci - clean install
# nd - pnpm dedupe
# na - agent alias for pnpm

# ni -v - check pnpm, node, npm, @antfu/ni versions
```

## Prioritize new features

### useTemplateRef

```vue
<script setup>
import { onMounted, useTemplateRef } from 'vue'

// the first argument must match the ref value in the template
const input = useTemplateRef('my-input')

onMounted(() => {
  input.value.focus()
})
</script>

<template>
  <input ref="my-input">
</template>
```

### defineModel

```vue
// declares "modelValue" prop, consumed by parent via v-model
const model = defineModel<string>()
// emits "update:modelValue" when mutated
model.value = 'hello'
// default model with options, required removes possible undefined values
const modelValue = defineModel<string>({ required: true })

// declares "count" prop, consumed by parent via v-model:count
const count = defineModel<number>('count')
// OR: declares "count" prop with options
const count = defineModel<number>('count', { default: 0 })

const [modelValue, modifiers] = defineModel<string, 'trim' | 'uppercase'>()
//                 ^? Record<'trim' | 'uppercase', true | undefined>
```
