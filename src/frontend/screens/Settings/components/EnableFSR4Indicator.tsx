import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { ToggleSwitch } from 'frontend/components/UI'
import useSetting from 'frontend/hooks/useSetting'
import ContextProvider from 'frontend/state/ContextProvider'
import SettingsContext from '../SettingsContext'
import InfoIcon from 'frontend/components/UI/InfoIcon'

const EnableFSR4Indicator = () => {
  const { t } = useTranslation()
  const { platform } = useContext(ContextProvider)
  const { isLinuxNative } = useContext(SettingsContext)
  const isLinux = platform === 'linux'
  const [enableFSR4Indicator, setEnableFSR4Indicator] = useSetting(
    'enableFSR4Indicator',
    false
  )

  if (!isLinux || isLinuxNative) {
    return <></>
  }

  return (
    <>
      <div className="toggleRow">
        <ToggleSwitch
          htmlId="fsr4IndicatorToggle"
          value={enableFSR4Indicator || false}
          handleChange={() => setEnableFSR4Indicator(!enableFSR4Indicator)}
          title={t(
            'setting.fsr4Indicator',
            'Enable FSR4 indicator (Proton version needs to support it)'
          )}
        />

        <InfoIcon
          text={t(
            'help.fsr4-upgrade',
            'Shows a watermark with FSR4 version information (supported by proton-cachyos)'
          )}
        />
      </div>
    </>
  )
}

export default EnableFSR4Indicator
