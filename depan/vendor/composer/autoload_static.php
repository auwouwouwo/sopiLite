<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita21bdc13bc13f812513579f4639d5418
{
    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInita21bdc13bc13f812513579f4639d5418::$classMap;

        }, null, ClassLoader::class);
    }
}
