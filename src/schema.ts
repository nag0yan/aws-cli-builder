import { z } from "zod";

const CommandOption = z.object({
	name: z.string(),
	value: z.string(),
	required: z.boolean(),
	description: z.string(),
});
const CommandOptionItem = z.object({
	key: z.string(),
	commandOption: CommandOption,
});

const Command = z.object({
	service: z.string(),
	name: z.string(),
	description: z.string(),
	options: z.array(CommandOptionItem),
});

const UpdateCommandOptionItem = CommandOptionItem.pick({
	key: true,
	commandOption: true,
});

const DeleteCommandOptionItem = CommandOptionItem.pick({
	key: true,
});

// types
export type CommandOption = z.infer<typeof CommandOption>;
export type CommandOptionItem = z.infer<typeof CommandOptionItem>;
export type Command = z.infer<typeof Command>;
export type UpdateCommandOptionItem = z.infer<typeof UpdateCommandOptionItem>;
export type DeleteCommandOptionItem = z.infer<typeof DeleteCommandOptionItem>;
