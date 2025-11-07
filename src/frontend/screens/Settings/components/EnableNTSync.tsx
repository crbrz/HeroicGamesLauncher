import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { ToggleSwitch } from 'frontend/components/UI'
import useSetting from 'frontend/hooks/useSetting'
import ContextProvider from 'frontend/state/ContextProvider'
import SettingsContext from '../SettingsContext'
import InfoIcon from 'frontend/components/UI/InfoIcon'

const EnableNTSync = () => {
  const { t } = useTranslation()
  const { platform } = useContext(ContextProvider)
  const { isLinuxNative } = useContext(SettingsContext)
  const isLinux = platform === 'linux'
  const [enableNTSync, setEnableNTSync] = useSetting('enableNTSync', false)

  if (!isLinux || isLinuxNative) {
    return <></>
  }

  return (
    <>
      <div className="toggleRow">
        <ToggleSwitch
          htmlId="ntSyncToggle"
          value={enableNTSync || false}
          handleChange={() => setEnableNTSync(!enableNTSync)}
          title={t(
            'setting.ntSync',
            'Enable NT sync (Proton version and Linux kernel needs to support it)'
          )}
        />

        <InfoIcon
          text={t(
            'help.ntsync',
            'Use NT synchronization system calls (supported by proton-cachyos)'
          )}
        />
      </div>
    </>
  )
}

export default EnableNTSync
