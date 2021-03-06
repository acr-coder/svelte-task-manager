import { writable,derived } from "svelte/store";
import { persistStore } from "./persistStore";

const initial = []
const memberInitial = ["All Team"]

export const  allTasks = persistStore('data',initial)


// export const allTasks = writable([
//   {
//     id: 1,
//     title: "store dosyaları düzeltilecek",
//     description: "hfghfh hfghfghf hfhfgh fghfghfg fghfg",
//     personel: ["Cenk", "Selin"],
//     deadline: "05/04/2022",
//     isCompleted:false
//   },
//   {
//     id: 2,
//     title: "store dosyaları düzeltilecek",
//     description: "hfghfh hfghfghf hfhfgh fghfghfg fghfg",
//     personel: ["Cenk", "Selin"],
//     deadline: "05/04/2022",
//     isCompleted:true
//   },
//   {
//     id: 3,
//     title: "store dosyaları düzeltilecek",
//     description: "hfghfh hfghfghf hfhfgh fghfghfg fghfg",
//     personel: ["Cenk", "Selin"],
//     deadline: "05/04/2022",
//     isCompleted:false
//   },
//   {
//     id: 4,
//     title: "store dosyaları düzeltilecek",
//     description: "hfghfh hfghfghf hfhfgh fghfghfg fghfg",
//     personel: ["Cenk", "Selin"],
//     deadline: "05/04/2022",
//     isCompleted:true
//   },
//   {
//     id: 5,
//     title: "store dosyaları düzeltilecek",
//     description: "hfghfh hfghfghf hfhfgh fghfghfg fghfg",
//     personel: ["Cenk", "Selin"],
//     deadline: "05/04/2022",
//     isCompleted:false
//   },
//   {
//     id: 6,
//     title: "store dosyaları düzeltilecek",
//     description: "hfghfh hfghfghf hfhfgh fghfghfg fghfg",
//     personel: ["Cenk", "Selin"],
//     deadline: "05/04/2022",
//     isCompleted:true
//   },
// ]);

export const countIncompletedTasks = derived(
    allTasks,
    $allTasks => $allTasks.filter((task) =>task.isCompleted === false).length
)

export const countCompletedTasks = derived(
    allTasks,
    $allTasks => $allTasks.filter((task) =>task.isCompleted === true).length
)

export const members =  persistStore('members',memberInitial)

export const selectedMember = writable([])

