<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>Llista d'Empleats</title>
                <link rel="stylesheet" type="text/css" href="../css/style.css"/>
            </head>
            <body>
                <h1>Llista d'Empleats</h1>
                <table>
                    <tr>
                        <th>Nom</th>
                        <th>Càrrec</th>
                        <th>Departament</th>
                        <th>Sou amb descompte</th>
                        <th>Categoria</th>
                    </tr>
                    <xsl:apply-templates select="empleats/empleat">
                        <xsl:sort select="sou" order="descending" data-type="number"/>
                    </xsl:apply-templates>
                </table>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="empleat">
        <xsl:variable name="souDescompte" select="sou * 0.85"/>

        <xsl:if test="sou &gt; 2000">
            <tr>
                <td><xsl:value-of select="nom"/></td>
                <td><xsl:value-of select="carrec"/></td>
                <td><xsl:value-of select="departament"/></td>
                <td>
                    <xsl:if test="sou &gt; 3000">
                        <span style="color: red;">
                            <xsl:value-of select="format-number($souDescompte, '#.00')"/>
                        </span>
                    </xsl:if>
                    <xsl:if test="sou &lt;= 3000">
                        <xsl:value-of select="format-number($souDescompte, '#.00')"/>
                    </xsl:if>
                </td>
                <td>
                    <xsl:choose>
                        <xsl:when test="anys &gt; 5">Sènior</xsl:when>
                        <xsl:otherwise>Júnior</xsl:otherwise>
                    </xsl:choose>
                </td>
            </tr>
        </xsl:if>
    </xsl:template>

</xsl:stylesheet>