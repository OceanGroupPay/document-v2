import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';

export const EnvVariable = ({ envKey, domainPrefix = "", domainPostfix = "" }) => {
  const { siteConfig } = useDocusaurusContext();
  const tempHref = `${domainPrefix}${siteConfig?.customFields[envKey]}${domainPostfix}`;
  return (
    <span>
      {domainPrefix ? <a href={tempHref} target="_blank">{tempHref}</a> : siteConfig.customFields[envKey]}
    </span>
  );
}