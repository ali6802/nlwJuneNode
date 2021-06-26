import { Request, Response } from "express";
import { TagsRepositories } from "../respositories/TagsRepositories";
import { ListTagsService } from "../services/ListTagsService";

class ListTagsController {
   async handle(request: Request, response: Response) {
      const listTagsService = new ListTagsService();

      const tags = await listTagsService.execute();

      return response.json(tags);

   }
}

export { ListTagsController }