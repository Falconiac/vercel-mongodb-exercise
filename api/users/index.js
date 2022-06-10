import connectToMongodb from '../../backend/db/connect-to-mongodb';
import User from '../../backend/models/User';

export default async function handler(request, response) {
	await connectToMongodb();

	if (request.method === 'GET') {
		// const users = await User.find({name: 'Frank', email: 'frank@tank.com'}, {email: 1});
		// const users = await User.find({_id: '62a1cb66d6f8094855c5e0ca'});
		// const users = await User.findById('62a1cb66d6f8094855c5e0ca');
		const users = await User.find({});
		return response.status(200).json({data: users});
	}
	if (request.method === 'POST') {
		const newUser = new User({
			name: 'Paula',
			email: 'paula@google.com',
			age: 24,
		});
		await newUser.save();
		return response.status(201).json({data: newUser});
	}
	return response.status(403).json({message: 'Error: request method not allowed.'});
}
