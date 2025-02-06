import { ActivatedRouteSnapshot } from "@angular/router";
import { TaskService } from "../services/task.service";
import { inject } from "@angular/core";

export const getTask = (route: ActivatedRouteSnapshot) => {
    const taskService = inject(TaskService);

    return taskService.get(route.paramMap.get('id') as string)
}