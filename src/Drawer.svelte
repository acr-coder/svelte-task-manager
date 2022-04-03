<script>
  import { allTasks, members } from "./store";
  import { fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher();
  export let taskDrawer;

  let title;
  let description;
  let personel = [];
  let deadline;
  let valid = false;
  let errors = { title: "", description: "", personel: "", deadline: "" };
  

  const handleSubmit = () => {
    valid = true;
    if (title.trim().length < 5) {
      valid = false;
      errors.title = "Task title must be at least 5 characters";
    } else {
      errors.title = "";
    }
    if (title.length > 30) {
      valid = false;
      errors.title = "Task title must be a maximum of 20 characters.";
    } else {
      errors.title = "";
    }
    if (description.trim().length < 5) {
      valid = false;
      errors.description = "Task description must be at least 5 characters";
    } else {
      errors.description = "";
    }
    if (!personel[0]) {
      valid = false;
      errors.personel =
        "You must select at least one personel or select all team";
    } else {
      errors.personel = "";
    }
    if (!deadline) {
      valid = false;
      errors.deadline = "Please select date";
    } else {
      errors.deadline = "";
    }

    if (valid) {
      let newTask = {
        id: Date.now(),
        title: title,
        description: description,
        personel: personel,
        deadline: deadline,
        isCompleted:false
      };
      console.log(newTask);
      allTasks.update(currentTasks => {
        return[newTask, ...currentTasks]
      })
      title='';
      description=''
      personel=[]
      deadline=''

      dispatch('taskAdded')
    }

    
  };
</script>

{#if taskDrawer}
  <div class="drawer" transition:fly={{ x: 200, duration: 1000 }}>
    <div class="close-btn" on:click>X</div>
    <div class="box">
      <h3>Add Task</h3>
      <form on:submit|preventDefault={handleSubmit}>
        <input 
        bind:value={title} on:input={()=>errors.title = ''}
        type="text" placeholder="task..." />
        <span class="error" >{errors.title}</span>
        <textarea
          bind:value={description}
          on:input={()=>errors.description = ''}
          name=""
          id=""
          cols="10"
          rows="2"
          placeholder="description..."
        />
        <span class="error" >{errors.description}</span>
        <select name="" id="" multiple
        on:input={()=>errors.personel = ''}
         bind:value={personel}>
         {#each $members as member (member)}
           <option value={member}>{member}</option>
         {/each}
          
          
        </select>
        <span class="error" >{errors.personel}</span>
        <div class="date-box">
          <label for="date-input" on:input={()=>errors.deadline = ''} >Deadline</label>
          <input bind:value={deadline} type="date" name="date-input" id="" />
        </div>
        <span class="error" >{errors.deadline}</span>

        <button type="submit" >Submit Task</button>
      </form>
    </div>
  </div>
{/if}

<style>
  .drawer {
    position: absolute;
    top: 0;
    right: 0;
    box-sizing: border-box;
    padding: 0;
    width: 40%;
    height: 100vh;

    background: rgb(238, 174, 202);
    background: radial-gradient(
      circle,
      rgba(238, 174, 202, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
  }

  .close-btn {
    margin-left: 10px;
    width: 25px;
        height: 25px;
        border-radius: 100%;
        background-color: rgba(149, 155, 152,0);
        text-align: center;
        color: rgb(0, 0, 0);
        cursor: pointer;
  }
  .close-btn:hover {
    background-color: rgba(149, 155, 152,1);;
  }
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  
  form {
    width: 80%;
    display: flex;
    flex-direction: column;
  }
  form > input,
  textarea,
  select {
    border-radius: 5px;
    outline: none;
  }
  .date-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .date-box > input {
    border-radius: 5px;
    outline: none;
  }
  form > button {
    border-radius: 5px;
    background-color: crimson;
    color: #fff;
    width: 70%;
    margin: auto;
    cursor: pointer;
  }
  .error{
    color: red;
    font-size: 9px;
  }
  
  @media screen and (max-width: 600px) {
    .drawer {
      width: 100%;
    }
    form {
      width: 90%;
    }
    .box {
      padding-top: 75px;
    }
  }
</style>
