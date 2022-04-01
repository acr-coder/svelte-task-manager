<script>
    import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";
  export let menuDrawer;
  

  const dispatch = createEventDispatcher()

  const handleClick = () => {
    dispatch('addNew')      
  }
</script>

{#if menuDrawer}
  <div class="drawer" transition:fly={{ x: -500, duration: 1000 }}>
    
      <span class="close-btn" on:click>X</span>
    
    
    <div class="box">
      <li>All Tasks</li>
      <li>Completed Tasks</li>
      <li>Incompleted Tasks</li>
    </div>
    <div class="add" >
        <span on:click={handleClick} class="addBtn" >+</span>
    </div>
    
  </div>
{/if}

<style>
  .drawer {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding: 20px;
    width: 20%;
    height: 100vh;

    background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  }

  .close-btn {
    position: absolute;
    right: 10px;
    font-size: 25px;
    cursor: pointer;
    color: rgb(224, 204, 204);
  }
  
  .close-btn:hover {
    color: #fff;
  }
  .box {
    display: flex;
    padding-top: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }

  li {
    list-style: none;
    margin-bottom: 10px;
    color: azure;
    opacity: 0.7;
    cursor: pointer;
  }
  li:hover {
    opacity: 1;
  }
  .add{
      display: flex;
      justify-content: center;
  }
  .addBtn{
    
      background-color: crimson;
      width: 35px;
      height: 35px;
      text-align: center;
      border-radius: 100%;
      line-height: 30px;
      color: #fff;
      cursor: pointer;
      opacity: 0.8;   
      
  }
  .addBtn:hover{
    opacity: 1;
  }
  @media screen and (max-width: 600px) {
    .drawer {
      width: 100%;
      height: 100vh;
      padding-top: 100px;
    }

    .box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 5px;
      padding-top: 0;
    }
    li {
      font-size: 26px;
    }
  }
</style>
