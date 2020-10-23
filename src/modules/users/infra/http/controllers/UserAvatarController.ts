import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class UsersAvatarControler {

    public async update(request: Request, response: Response): Promise<Response> {

        const updateUserAvatar = container.resolve(UpdateUserAvatarService);

        const user = await updateUserAvatar.execute({

            user_id: '1db72e70-b3e9-42ff-aae6-3444b4df567a',
            avatarFilename: request.file.filename
        });
        return response.json(user);
    }
}