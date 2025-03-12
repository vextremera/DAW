<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes"/>
    <xsl:param name="departamentFiltrat"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>Gestió d'Empleats</title>
                <link rel="stylesheet" type="text/css" href="../css/style.css"/>
                <!--
                //He provat a fer el filtre però no m'ha funcionat de cap manera
                <script>
                    function filtrar(dept) {
                        window.location.search = "?departamentFiltrat=" + dept;
                    }
                </script>
                -->
            </head>
            <body>
                <h1>Gestió d'Empleats</h1>

                <!--
                // Els buttons pel filtre
                <label for="departament">Filtrar per departament:</label>
                <select id="departament" onchange="filtrar(this.value)">
                    <option value="">Tots</option>
                    <xsl:for-each select="empleats/empleat">
                        <xsl:sort select="departament"/>
                        <xsl:if test="not(preceding-sibling::empleat/departament = departament)">
                            <option value="{departament}">
                                <xsl:value-of select="departament"/>
                            </option>
                        </xsl:if>
                    </xsl:for-each>
                </select>
                -->

                <table>
                    <tr>
                        <th>Nom</th>
                        <th>Càrrec</th>
                        <th>Departament</th>
                        <th>Sou (€)</th>
                        <th>Sou després Descompte (€)</th>
                        <th>Categoria</th>
                        <th>Data Contractacio</th>
                    </tr>
                    <xsl:apply-templates select="empleats/empleat">
                        <xsl:sort select="sou" order="descending" data-type="number"/>
                    </xsl:apply-templates>
                </table>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="empleat">
        <xsl:variable name="souNet" select="sou * 0.85"/>
        <xsl:variable name="anysTreballats">
            <xsl:call-template name="calcularAntiguitat">
                <xsl:with-param name="data" select="data_contractacio"/>
            </xsl:call-template>
        </xsl:variable>
        <xsl:variable name="categoria">
            <xsl:choose>
                <xsl:when test="$anysTreballats &gt;= 5">Sènior</xsl:when>
                <xsl:otherwise>Júnior</xsl:otherwise>
            </xsl:choose>
        </xsl:variable>
        <xsl:variable name="dataContractacio"/>

        <xsl:if test="sou &gt; 2000 and (string($departamentFiltrat) = '' or departament = $departamentFiltrat)">
        <tr>
            <xsl:variable name="souClass">
                <xsl:choose>
                    <xsl:when test="$souNet &gt;= 4500">sou-rojo</xsl:when>
                    <xsl:otherwise>sou-normal</xsl:otherwise>
                </xsl:choose>
            </xsl:variable>
            <xsl:variable name="sou">
                <xsl:choose>
                    <xsl:when test="sou &gt;= 4500">sou-rojo</xsl:when>
                    <xsl:otherwise>sou-normal</xsl:otherwise>
                </xsl:choose>
            </xsl:variable>

            <xsl:variable name="categoriaClass">
                <xsl:choose>
                    <xsl:when test="$categoria = 'Sènior'">categoria-senior</xsl:when>
                    <xsl:otherwise>categoria-junior</xsl:otherwise>
                </xsl:choose>
            </xsl:variable>

            <td><xsl:value-of select="nom"/></td>
            <td><xsl:value-of select="carrec"/></td>
            <td><xsl:value-of select="departament"/></td>
            <td class="sou {$sou}">
                <xsl:value-of select="format-number(sou, '€ #,##0.00')"/>
            </td>
            <td class="{$souClass}">
                <xsl:value-of select="format-number($souNet, '€ #,##0.00')"/>
            </td>
            <td class="{$categoriaClass}">
                <xsl:value-of select="$categoria"/>
            </td>
            <td><xsl:value-of select="data_contractacio"/></td>
        </tr>
        </xsl:if>
    </xsl:template>

    <xsl:template name="calcularAntiguitat">
        <xsl:param name="data"/>
        <xsl:variable name="anyActual" select="2025"/>
        <xsl:variable name="anyContractacio" select="substring($data, 1, 4)"/>
        <xsl:value-of select="$anyActual - $anyContractacio"/>
    </xsl:template>
</xsl:stylesheet>