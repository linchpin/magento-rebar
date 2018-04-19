<?php

\Magento\Framework\Component\ComponentRegistrar::register(
	\Magento\Framework\Component\ComponentRegistrar::THEME,
	'frontend/{%= theme_vendor %}/{%= theme_identifier %}',
	__DIR__
);