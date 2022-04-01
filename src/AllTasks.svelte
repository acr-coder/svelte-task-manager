<script>
    import {allTasks} from "./store"
    export let taskDrawer;

    

</script>

{#if taskDrawer === false}
    <div class="task-box">
    {#each $allTasks as task (task.id)}
    <div  class="card">
        <h3>{task.title}</h3> 
        {#each task.personel as personel }
           <span>{personel}</span> 
        {/each}
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
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .card{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        padding: 5px 15px;
        margin-top: 10px;
        background-color: rgb(242, 214, 161);
        border-radius: 15px;
    }
</style>