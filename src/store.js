import { writable,derived } from "svelte/store";

export const allTasks = writable([
  {
    id: 1,
    title: "store dosyaları düzeltilecek",
    description: "hfghfh hfghfghf hfhfgh fghfghfg fghfg",
    personel: ["Cenk", "Selin"],
    deadline: "05/04/2022",
    isCompleted:false
  },
]);

export const countIncompletedTasks = derived(
    allTasks,
    $allTasks => $allTasks.filter((task) =>task.isCompleted === false).length
)

export const countCompletedTasks = derived(
    allTasks,
    $allTasks => $allTasks.filter((task) =>task.isCompleted === true).length
)

