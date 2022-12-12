
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const rvm_use_flag: string;
	export const TERM_PROGRAM: string;
	export const rvm_bin_path: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const GEM_HOME: string;
	export const rvm_quiet_flag: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_config_version_git_tag: string;
	export const TERM: string;
	export const SHELL: string;
	export const rvm_gemstone_url: string;
	export const npm_package_devDependencies_vite: string;
	export const TMPDIR: string;
	export const IRBRC: string;
	export const rvm_docs_type: string;
	export const npm_config_init_license: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_scripts_dev: string;
	export const TERM_SESSION_ID: string;
	export const MY_RUBY_HOME: string;
	export const rvm_hook: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_private: string;
	export const npm_config_registry: string;
	export const npm_package_readmeFilename: string;
	export const USER: string;
	export const npm_package_description: string;
	export const rvm_gemstone_package_file: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_dependencies__solana_web3_js: string;
	export const rvm_path: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const rvm_proxy: string;
	export const npm_execpath: string;
	export const npm_package_dependencies__svelte_on_solana_wallet_adapter_core: string;
	export const npm_package_devDependencies_tslib: string;
	export const rvm_ruby_file: string;
	export const npm_package_devDependencies_svelte: string;
	export const rvm_prefix: string;
	export const rvm_silent_flag: string;
	export const PATH: string;
	export const rvm_ruby_make: string;
	export const npm_config_argv: string;
	export const _: string;
	export const __CFBundleIdentifier: string;
	export const PWD: string;
	export const npm_package_scripts_preview: string;
	export const npm_lifecycle_event: string;
	export const rvm_sdk: string;
	export const npm_package_name: string;
	export const npm_package_scripts_build: string;
	export const npm_config_version_commit_hooks: string;
	export const XPC_FLAGS: string;
	export const npm_config_bin_links: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_dependencies__svelte_on_solana_wallet_adapter_ui: string;
	export const npm_package_dependencies__solana_wallet_adapter_wallets: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_version: string;
	export const rvm_version: string;
	export const npm_package_dependencies__solana_wallet_adapter_base: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const HOME: string;
	export const SHLVL: string;
	export const rvm_pretty_print_flag: string;
	export const rvm_script_name: string;
	export const npm_package_type: string;
	export const rvm_ruby_mode: string;
	export const npm_config_save_prefix: string;
	export const npm_config_strict_ssl: string;
	export const npm_config_version_git_message: string;
	export const LOGNAME: string;
	export const YARN_WRAP_OUTPUT: string;
	export const rvm_alias_expanded: string;
	export const npm_lifecycle_script: string;
	export const GEM_PATH: string;
	export const LC_CTYPE: string;
	export const rvm_nightly_flag: string;
	export const npm_config_version_git_sign: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_user_agent: string;
	export const rvm_ruby_make_install: string;
	export const rvm_niceness: string;
	export const rvm_ruby_bits: string;
	export const rvm_bin_flag: string;
	export const npm_config_init_version: string;
	export const npm_config_ignore_optional: string;
	export const RUBY_VERSION: string;
	export const rvm_only_path_flag: string;
	export const npm_package_scripts_check: string;
	export const npm_node_execpath: string;
	export const npm_config_version_tag_prefix: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		rvm_use_flag: string;
		TERM_PROGRAM: string;
		rvm_bin_path: string;
		NODE: string;
		INIT_CWD: string;
		GEM_HOME: string;
		rvm_quiet_flag: string;
		npm_package_devDependencies_typescript: string;
		npm_config_version_git_tag: string;
		TERM: string;
		SHELL: string;
		rvm_gemstone_url: string;
		npm_package_devDependencies_vite: string;
		TMPDIR: string;
		IRBRC: string;
		rvm_docs_type: string;
		npm_config_init_license: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_scripts_dev: string;
		TERM_SESSION_ID: string;
		MY_RUBY_HOME: string;
		rvm_hook: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_private: string;
		npm_config_registry: string;
		npm_package_readmeFilename: string;
		USER: string;
		npm_package_description: string;
		rvm_gemstone_package_file: string;
		npm_package_scripts_check_watch: string;
		npm_package_dependencies__solana_web3_js: string;
		rvm_path: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		rvm_proxy: string;
		npm_execpath: string;
		npm_package_dependencies__svelte_on_solana_wallet_adapter_core: string;
		npm_package_devDependencies_tslib: string;
		rvm_ruby_file: string;
		npm_package_devDependencies_svelte: string;
		rvm_prefix: string;
		rvm_silent_flag: string;
		PATH: string;
		rvm_ruby_make: string;
		npm_config_argv: string;
		_: string;
		__CFBundleIdentifier: string;
		PWD: string;
		npm_package_scripts_preview: string;
		npm_lifecycle_event: string;
		rvm_sdk: string;
		npm_package_name: string;
		npm_package_scripts_build: string;
		npm_config_version_commit_hooks: string;
		XPC_FLAGS: string;
		npm_config_bin_links: string;
		XPC_SERVICE_NAME: string;
		npm_package_dependencies__svelte_on_solana_wallet_adapter_ui: string;
		npm_package_dependencies__solana_wallet_adapter_wallets: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_version: string;
		rvm_version: string;
		npm_package_dependencies__solana_wallet_adapter_base: string;
		npm_package_devDependencies_svelte_check: string;
		HOME: string;
		SHLVL: string;
		rvm_pretty_print_flag: string;
		rvm_script_name: string;
		npm_package_type: string;
		rvm_ruby_mode: string;
		npm_config_save_prefix: string;
		npm_config_strict_ssl: string;
		npm_config_version_git_message: string;
		LOGNAME: string;
		YARN_WRAP_OUTPUT: string;
		rvm_alias_expanded: string;
		npm_lifecycle_script: string;
		GEM_PATH: string;
		LC_CTYPE: string;
		rvm_nightly_flag: string;
		npm_config_version_git_sign: string;
		npm_config_ignore_scripts: string;
		npm_config_user_agent: string;
		rvm_ruby_make_install: string;
		rvm_niceness: string;
		rvm_ruby_bits: string;
		rvm_bin_flag: string;
		npm_config_init_version: string;
		npm_config_ignore_optional: string;
		RUBY_VERSION: string;
		rvm_only_path_flag: string;
		npm_package_scripts_check: string;
		npm_node_execpath: string;
		npm_config_version_tag_prefix: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
