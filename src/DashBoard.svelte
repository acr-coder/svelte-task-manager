<script>
    import { allTasks, countIncompletedTasks, countCompletedTasks} from "./store"
    import { fly } from "svelte/transition";
    export let menuDrawer = false;
</script>



<div class="box"  class:menu-open={menuDrawer} >
    <div  class="card">
       <h3>All Tasks</h3> 
       <span>{$allTasks.length}</span>
    </div>
    <div  class="card">
        <h3>Completed Tasks</h3> 
        <span>{$countCompletedTasks}</span>
     </div>
     <div  class="card">
        <h3>Incompleted Tasks</h3> 
        <span>{$countIncompletedTasks}</span>
     </div>
</div>
<div class="separate"></div>

<style>
    .box{
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        
    }
    .card{
        width: 190px;
        text-align: center;
        display: flex;
        flex-direction: column;
        box-shadow:2px 2px 5px 5px rgba(255, 255, 255, 0.5);
        background-color: crimson;
        border-radius: 10px;
        color: orange;
        transition: all 0.3s ease;
        
    }
    span{
        font-size: 20px;
        color: #fff;
        margin-bottom: 5px;
    }
    h3{
        margin-bottom: 0;
    }
    .separate{
        width: 90%;
        height: 5px;
        background-color: rgb(226, 163, 81);
        margin: auto;
    }

    @media screen and (max-width: 600px) {
    .box{
        flex-direction: column;
        padding-top: 50px;
    }
    .card{
        width: 80%;
        margin-bottom: 10px;
    }
}
</style>