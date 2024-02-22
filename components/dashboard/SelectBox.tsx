import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const SelectBox = () => {
	return (
		<Select>
			<SelectTrigger className="w-full">
				<SelectValue placeholder="Jupiter" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Themes</SelectLabel>
					<SelectItem value="jupiter">Jupiter</SelectItem>
					<SelectItem value="saturn">Saturn</SelectItem>
					<SelectItem value="default">Default</SelectItem>
					<SelectItem value="nostalgic">Nostalgic</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export default SelectBox;
