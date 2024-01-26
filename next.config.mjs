/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "platform-lookaside.fbsbx.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "i.scdn.co",
				port: "",
				pathname: "/**",
			},
		],
	},
};
export default nextConfig;
