package com.todofy.TodoService.domain;

import org.springframework.data.annotation.Id;

public class Todo {
    @Id
    private String todoId;
    private String todoContent;

    private String todoCreationDate;
    private String priority;
    private String dueDate;

    private String category;
    private boolean archive;
    private Status status;

    public Todo() {
    }

    public Todo(String todoId, String todoContent, String todoCreationDate, String priority, String dueDate, String category, boolean archive, Status status) {
        this.todoId = todoId;
        this.todoContent = todoContent;
        this.todoCreationDate = todoCreationDate;
        this.priority = priority;
        this.dueDate = dueDate;
        this.category = category;
        this.archive = archive;
        this.status = status;
    }

    public String getTodoId() {
        return todoId;
    }

    public void setTodoId(String todoId) {
        this.todoId = todoId;
    }

    public String getTodoContent() {
        return todoContent;
    }

    public void setTodoContent(String todoContent) {
        this.todoContent = todoContent;
    }

    public String getTodoCreationDate() {
        return todoCreationDate;
    }

    public void setTodoCreationDate(String todoCreationDate) {
        this.todoCreationDate = todoCreationDate;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public boolean isArchive() {
        return archive;
    }

    public void setArchive(boolean archive) {
        this.archive = archive;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Todo{" +
                "todoId='" + todoId + '\'' +
                ", todoContent='" + todoContent + '\'' +
                ", todoCreationDate='" + todoCreationDate + '\'' +
                ", priority='" + priority + '\'' +
                ", dueDate='" + dueDate + '\'' +
                ", category='" + category + '\'' +
                ", archive=" + archive +
                ", status=" + status +
                '}';
    }
}
