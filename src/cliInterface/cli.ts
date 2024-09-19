export const Options = {
	"aws ec2 describe-instances": {
		description: "Describes one or more of your instances.",
		options: [
			{
				key: "--instance-ids",
				description: "One or more instance IDs.",
				required: true,
				type: "string",
			},
		],
	},
};
