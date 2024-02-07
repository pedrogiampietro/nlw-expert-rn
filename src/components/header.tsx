import { Image, Text, View } from 'react-native';

type HeaderProps = {
	title: string;
};

export function Header({ title }: HeaderProps) {
	return (
		<View className='flex-row items-center border-b border-slate-700 pb-5 mx-5'>
			<View className='flex-1'>
				<Image source={require('@/assets/logo.png')} className='w-32 h-6' />
				<Text className='text-white text-xl font-heading mt-2'>{title}</Text>
			</View>
		</View>
	);
}
