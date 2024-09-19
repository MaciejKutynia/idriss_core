import { IDRISS_ICON_WITH_TEXT } from 'shared/idriss';
import { IconButton, Toggle } from 'shared/ui';
import {
  EXTENSION_POPUP_ROUTE,
  useExtensionPopup,
  useExtensionSettings,
} from 'shared/extension';

export const TopBar = () => {
  const { extensionSettings, changeExtensionSetting } = useExtensionSettings();
  const extensionPopup = useExtensionPopup();

  const isHomeView = extensionPopup.currentRoute === EXTENSION_POPUP_ROUTE.HOME;

  return (
    <nav className="flex items-center justify-between bg-white drop-shadow-sm">
      <a
        href="https://www.idriss.xyz/"
        className="flex items-center justify-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="my-2 ml-2 h-12 w-auto"
          src={IDRISS_ICON_WITH_TEXT}
          alt="IDriss Logo"
        />
      </a>
      <div className="flex items-center pr-2">
        <Toggle
          checked={extensionSettings['entire-extension-enabled']}
          onCheckedChange={(enabled) => {
            return changeExtensionSetting('entire-extension-enabled', enabled);
          }}
        />
        <IconButton
          className="text-black"
          iconProps={{
            name: isHomeView ? 'DotsVerticalIcon' : 'Cross1Icon',
            size: 26,
          }}
          onClick={() => {
            extensionPopup.navigate(
              isHomeView
                ? EXTENSION_POPUP_ROUTE.SETTINGS_HOME
                : EXTENSION_POPUP_ROUTE.HOME,
            );
          }}
        />
      </div>
    </nav>
  );
};
