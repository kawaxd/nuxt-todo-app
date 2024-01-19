import { defineStore } from "pinia";
import type { Task } from "@/types";
export const useTaskStore = defineStore("task", {
  state: () => ({
    tasks: [] as Task[],
  }),

  actions: {
    createTask(task: Task): void {
      this.tasks.push(task);
    },

    async getAllTasks(): Promise<Task[]> {
      return this.tasks;
    },

    async getTaskById(id: string): Promise<Task | undefined> {
      return this.tasks.find((task) => task.id === id);
    },

    updateTask(updatedTask: Task): void {
      const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        this.tasks[index] = { ...this.tasks[index], ...updatedTask };
        this.tasks[index].updatedAt = new Date().toLocaleString();
      }
    },

    deleteTask(id: string): void {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },

    changeStatus(id: string): void {
      const index = this.tasks.findIndex((task) => task.id === id);
      if (index !== -1) {
        this.tasks[index].isActive = !this.tasks[index].isActive;
        this.tasks[index].updatedAt = new Date().toLocaleString();
      }
    },
  },
  persist: true
});
