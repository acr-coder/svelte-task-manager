<script>
    import {allTasks} from "./store"
    import { fade,slide, scale } from 'svelte/transition';
    import { flip } from 'svelte/animate'
    
    export let taskDrawer;
    export let menuDrawer;

    const handleComplete = (id)=> {
       allTasks.update(currentTasks => {
           let copiedTasks = [...currentTasks];
           let completedTask = copiedTasks.find((task)=>task.id == id);

           completedTask.isCompleted = !completedTask.isCompleted;

           return copiedTasks;
       })
    }
    const handleRemove = (id) => {
        allTasks.update(currentTasks => {
           
            return currentTasks.filter((task) => task.id !== id)
       })
    }

</script>

{#if taskDrawer === false & menuDrawer === false}
    <div class="task-box">
    {#each $allTasks as task (task.id)}
    <div 
    on:dblclick={() => handleComplete(task.id)} 
    class:completed={task.isCompleted} 
    in:fade out:scale|local animate:flip={{duration: 500}}
    class="card">
        <div on:click={() => handleRemove(task.id)} class="remove">X</div>
        <h4>{task.title}</h4> 
        <h6>{task.description.slice(0,30)}...</h6>
        <div class="member" >
        {#each task.personel as personel }
           <span>{personel}</span> 
        {/each}
    </div>
        <span>{task.deadline}</span>
     </div>
     
    {/each}
</div>
{/if}


<style>
    .task-box{
        display: flex;
        padding: 30px;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    .card{
        position: relative;
        box-sizing: border-box;
        max-width: 200px;
        display: flex;
        flex-direction: column;
        padding: 5px 15px;
        margin-top: 10px;
        background-color: rgb(242, 214, 161);
        border-radius: 15px;
    }
    .member{
        display: flex;
        justify-content: space-around;
        
    }
    h6,h4{
        margin: 3px;
    }
    span{
        font-size: 10px;
        text-align: center;
        color: orangered;
    }
    .completed{
    background-color: rgb(238, 123, 123);
    }
    .completed > h4{
        text-decoration: line-through;
    }
    .completed > h6{
        text-decoration: line-through;
    }
    .remove{
        position: absolute;
        top: 10px;
        right: 10px;
        width: 25px;
        height: 25px;
        border-radius: 100%;
        background-color: rgba(149, 155, 152,0);
        text-align: center;
        color: rgb(0, 0, 0);
        cursor: pointer;
    }
    .remove:hover{
        background-color: rgba(149, 155, 152,1);
    }
</style>